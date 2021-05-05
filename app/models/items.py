from flask_sqlalchemy import SQLAlchemy
from .db import db


item_sizes = db.Table(
    "item_sizes",
    db.Column("itemId", db.Integer, db.ForeignKey("items.id"), primary_key=True),
    db.Column("sizeId", db.Integer, db.ForeignKey("sizes.id"), primary_key=True)
)


class Items(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    itemName = db.Column(db.String(255), nullable=False)
    colors = db.Column(db.String(40), nullable=False)
    material = db.Column(db.String(255), nullable=False)
    detail = db.Column(db.Text, nullable=False)
    photoId = db.Column(db.Integer, db.ForeignKey("photos.id"), nullable=False)
    categoryId = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)
    sizes = db.relationship(
        "Sizes",
        secondary=item_sizes,
        back_populates="items"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "itemName": self.itemName,
            "sizes": self.sizes,
            "colors": self.colors,
            "material": self.material,
            "detail": self.detail,
            "photoId": self.photoId,
            "categoryId": self.categoryId,
        }


class Sizes(db.Model):
    __tablename__ = 'sizes'

    id = db.Column(db.Integer, primary_key=True)
    size = db.Column(db.String(40), nullable=False)
    count = db.Column(db.Integer, nullable=False)
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
            "items": self.items,
        }