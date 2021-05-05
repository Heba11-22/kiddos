from .db import db


class SavedItems(db.Modal):
    __tablename__ = 'savedItems'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    itemId = db.Column(db.Integer, db.ForeignKey("items.id"), nullable=False)

# send data as JSON format
    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "itemId": self.itemId,
        }
