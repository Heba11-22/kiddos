from app.models import db, SavedItems


def seed_savedItems():
    savedItem = SavedItems(userId=2, itemId=3)


def undo_savedItems():
    db.session.execute('TRUNCATE savedItems RESTART IDENTITY CASCADE;')
    db.session.commit()