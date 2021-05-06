from app.models import db, Carts


def seed_carts():
    cart = Carts(userId=2, itemId=4)
    db.session.add(cart)
    db.session.commit()
    

def undo_carts():
    db.session.execute('TRUNCATE carts RESTART IDENTITY CASCADE;')
    db.session.commit()