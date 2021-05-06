from app.models import db, Items
from faker import Faker

fake = Faker()


def seed_items():
    for num in range(16):
        item = Items(itemName="dress", colors="black", material="cotton",
                     detail=fake.text(), photoId=num+1, categoryId=1)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()


def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()


def seed_item_sizes():
    items = db.Items.query.all()
    allsizes = db.Sizes.query.all()
    for item in items:
        item.Sizes.extend(allsizes)
