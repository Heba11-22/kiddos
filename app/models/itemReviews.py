from .db import db


class ItemReviews(db.Modal):
    __tablename__ = 'itemReviews'

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer)
    review = db.Column(db.Text, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("user.id"))
    itemId = db.Column(db.Integer, db.ForeignKey("items.id"), nullable=False)

    # send data as JSON format
    def to_dict(self):
        return {
            "id": self.id,
            "rating": self.rating,
            "review": self.review,
            "userId": self.userId,
            "itemId": self.itemId,
        }
