from .db import db


class Categories(db.Modal):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    categoryName = db.Column(db.String(40), nullable=False)
    mainCategoryId = db.Column(db.Integer, db.ForeignKey("mainCategories.id"), nullable=False)

    # send data as JSON format
    def to_dict(self):
        return {
            "id": self.id,
            "categoryName": self.categoryName,
            "mainCategoryId": self.mainCategoryId,
        }