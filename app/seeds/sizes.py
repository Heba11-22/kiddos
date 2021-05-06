from app.models import db, Sizes, Items
from faker import Faker

fake = Faker()


def seed_sizes():
    items =[]
    size1 = Sizes(size="small", count=4)
    size2 = Sizes(size="medium", count=4)
    size3 = Sizes(size="large", count=4)
    size4 = Sizes(size="2T", count=4)
    size5 = Sizes(size="3T", count=4)
    size6 = Sizes(size="5T", count=4)
    db.session.add(size1)
    db.session.add(size2)
    db.session.add(size3)
    db.session.add(size4)
    db.session.add(size5)
    db.session.add(size6)
    db.session.commit()
    for num in range(16):
        item = Items(itemName="dress", colors="black", material="cotton",
                     detail=fake.text(), photoId=num+1, categoryId=1)
        print("------------", item.sizes) 
        print("+++++++++++", item) 
        db.session.add(item)
        for i in range(4):
            for size in [size1, size2, size3, size4]:
                item.sizes.append(size)
            db.session.commit()
        # size1.items.append(item)
    db.session.commit()
    

def undo_sizes():
    db.session.execute('TRUNCATE sizes RESTART IDENTITY CASCADE;')
    db.session.commit()


