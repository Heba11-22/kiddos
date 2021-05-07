from .db import db


class Photos(db.Model):
    __tablename__ = 'photos'

    id = db.Column(db.Integer, primary_key=True)
    photo_url = db.Column(db.String(500), nullable=False)
    item = db.relationship("Items", back_populates="photos", cascade="all, delete")

    def to_dict(self):
        return {
            "id": self.id,
            "photo_url": self.photo_url
        }

    def get_photo(self):
        return {
            "photo_url": self.photo_url
        }