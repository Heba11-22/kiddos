from flask_sqlalchemy import SQLAlchemy
from .db import db


class MainCategories(db.Model):
    __tablename__ = 'mainCategories'

    id = db.Column(db.Integer, primary_key=True)
    main_categoryName = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "main_categoryName": self.main_categoryName
        }