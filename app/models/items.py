from .db import db


class Items(db.Modal):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    itemName = db.Column(db.String(40), nullable=False)
    sizes = db.Column(db.Integer, nullable=False)
    photo_url = db.Column(db.String(255), nullable=False)
    colors = db.Column(db.String(40), nullable=False)
    material = db.Column(db.String(40), nullable=False)
    numberOfItems = db.Column(db.Integer, nullable=False)
    detail = db.Column(db.Text, nullable=False)
    categoryId = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "itemName": self.itemName,
            "sizes": self.sizes,
            "photo_url": self.photo_url,
            "colors": self.colors,
            "material": self.material,
            "numberOfItems": self.numberOfItems,
            "detail": self.detail,
            "categoryId": self.categoryId,
        }