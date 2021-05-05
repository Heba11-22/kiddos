from .db import db


class Carts(db.Modal):
    __tablename__ = 'carts'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("user.id"))
    itemId = db.Column(db.Integer, db.ForeignKey("items.id"), nullable=False)

    # send data as JSON format
    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "itemId": self.itemId,
        }