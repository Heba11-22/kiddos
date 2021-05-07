from flask_sqlalchemy import SQLAlchemy
from .db import db


class MainCategories(db.Model):
    __tablename__ = 'maincategories'

    id = db.Column(db.Integer, primary_key=True)
    main_categoryName = db.Column(db.String(50), nullable=False)
    categories = db.relationship("Categories", backref='maincategories', cascade="all, delete")

    def to_dict(self):
        return {
            "id": self.id,
            "main_categoryName": self.main_categoryName,
            # "categories": self.categories
            "categories": [category.get_categories() for
                           category in self.categories]
        }