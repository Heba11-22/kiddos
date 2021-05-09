from flask_sqlalchemy import SQLAlchemy
from .db import db


item_sizes = db.Table(
    "item_sizes",
    db.Column("itemId", db.Integer, db.ForeignKey("items.id")),
    db.Column("sizeId", db.Integer, db.ForeignKey("sizes.id"))
)


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
            "sizes": [size.get_item() for size in self.sizes]
            #^ size.get_item() bc .to_dict gave me recursion error
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
            "items": [item.to_dict() for item in self.items]
        }

# Func. to call it in the items table to retrive the sizes in the items query:
    def get_item(self):
        return {
            "size": self.size,
            "count": self.count,
        }
