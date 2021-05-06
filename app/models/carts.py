from .db import db
from flask_sqlalchemy import SQLAlchemy


class Carts(db.Model):
    __tablename__ = 'carts'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    itemId = db.Column(db.Integer, db.ForeignKey("items.id"), nullable=False)

    items = db.relationship("Items", back_populates="cart", cascade="all, delete")

    # send data as JSON format
    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "itemId": self.itemId,
        }