from flask_sqlalchemy import SQLAlchemy
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin  #isauthenticated

# join table between item and size
item_sizes = db.Table(
    "item_sizes",
    db.Column("itemId", db.Integer, db.ForeignKey("items.id")),
    db.Column("sizeId", db.Integer, db.ForeignKey("sizes.id"))
)

# join table between item and user
user_items = db.Table(
    "user_items",
    db.Column("userId", db.Integer, db.ForeignKey("users.id")),
    db.Column("itemId", db.Integer, db.ForeignKey("items.id")),
)


# >>>>>1- Itmes model
class Items(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    itemName = db.Column(db.String(255), nullable=False)
    colors = db.Column(db.String(40), nullable=False)
    material = db.Column(db.String(255), nullable=False)
    detail = db.Column(db.Text, nullable=False)
    # item_identifiers = db.Column(db.String(5), nullable=False)
    # size = db.Column(db.String(40), nullable=False)
    # photos = db.Column(db.String(255), nullable=False)
    photoId = db.Column(db.Integer, db.ForeignKey("photos.id"), nullable=False)
    categoryId = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)
    photos = db.relationship("Photos", back_populates="item", cascade="all, delete")
    category = db.relationship("Categories", back_populates="items", cascade="all, delete")
    cart = db.relationship("Carts", back_populates="items", cascade="all, delete")
    sizes = db.relationship(
        "Sizes",
        secondary=item_sizes,
        back_populates="items"
    )
    users = db.relationship(
        "User",
        secondary=user_items,
        back_populates="items"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "itemName": self.itemName,
            "colors": self.colors,
            "material": self.material,
            "detail": self.detail,
            # "photoId": self.photoId,
            "categoryId": self.categoryId,
            # "photos": [photo.get_photo() for photo in self.photos],
            "photos": self.photos.get_photo(),
            "sizes": [size.get_item() for size in self.sizes],
            "users": [user.to_dict() for user in self.users],
            # size.get_item() bc .to_dict gave me recursion error
        }

    def get_items(self):
        return {
            "id": self.id,
            "itemName": self.itemName,
            "colors": self.colors,
            "material": self.material,
            "detail": self.detail,
            "categoryId": self.categoryId,
            "photos": self.photos.get_photo(),
            "sizes": [size.get_item() for size in self.sizes]
        }


# Sizes model
class Sizes(db.Model):
    __tablename__ = 'sizes'

    id = db.Column(db.Integer, primary_key=True)
    size = db.Column(db.String(40), nullable=False)
    count = db.Column(db.Integer, nullable=False)
    # items = db.Column(db.String(50), nullable=False)
    items = db.relationship(
        "Items",
        secondary=item_sizes,
        back_populates="sizes"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "size": self.size,
            "count": self.count,
            "items": [item.get_items() for item in self.items]
        }

# Func. to call it in the items table to retrive the sizes in the items query:
    def get_item(self):
        return {
            "size": self.size,
            "count": self.count,
        }


# User model
class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)  # using from werkzeug.security.
    avatar_url = db.Column(db.String(255))  # using from werkzeug.security.

    user_cart = db.relationship("Carts", backref="user", cascade="all, delete")
    items = db.relationship(
        "Items",
        secondary=user_items,
        back_populates="users"
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    # send data as JSON format
    def to_dict(self):
        return {
          "id": self.id,
          "username": self.username,
          "email": self.email,
          "avatar_url": self.avatar_url,
          "items": [item.get_items() for item in self.items]
        }
