from flask_sqlalchemy import SQLAlchemy
from .db import db


class Categories(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    categoryName = db.Column(db.String(250), nullable=False)
    mainCategoryId = db.Column(db.Integer, db.ForeignKey("maincategories.id"))
    items = db.relationship("Items", back_populates="category", cascade="all, delete")

    # send data as JSON format
    def to_dict(self):
        return {
            "id": self.id,
            "CategoryName": self.categoryName,
            "MainCategoryId": self.mainCategoryId,
        }
     
    def get_categories(self):
        return {
            "CategoryName": self.categoryName,
            "Items": [item.get_items() for item in self.items]
        }

