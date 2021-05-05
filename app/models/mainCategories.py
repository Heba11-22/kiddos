from .db import db


class MainCategories(db.Modal):
    __tablename__ = 'mainCategories'

    id = db.Column(db.Integer, primary_key=True)
    main_categoryName = db.Column(db.String(40), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "main_categoryName": self.main_categoryName
        }