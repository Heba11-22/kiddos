from app.models import db, Items
from app.models.items import User
from faker import Faker

fake = Faker()


def seed_items():
    for num in range(16):
        item = Items(itemName="GRIL DRESS", colors="pink", material="Cotton",
                     detail="Textured gauze ruffle maci dress with necklace. Imported.",
                     photoId=num+1, categoryId=1)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(11):
        item = Items(itemName="GIRL PANT", colors="orange", material="Cotton",
                     detail="A colorful floral print creates the fun, fresh look of these comfortable leggings from Ideology.",
                     photoId=num+17, categoryId=2)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(9):
        item = Items(itemName="GIRL TOP", colors="pink", material="Cotton",
                     detail="Look lovely in this heart print and bow detail tank by Epic Threads. Bow back detail.",
                     photoId=num+28, categoryId=3)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(16):
        item = Items(itemName="TODDLER GRIL DRESS", colors="yellow", material="Polyester",
                     detail="Textured gauze ruffle maci dress with necklace. Imported.",
                    photoId=num+1, categoryId=4)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(11):
        item = Items(itemName="TODDLER GIRL PANTS", colors="blue", material="Cotton",
                     detail="A colorful floral print creates the fun, fresh look of these comfortable leggings from Ideology.",
                    photoId=num+17, categoryId=5)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(9):
        item = Items(itemName="TODDLER GIRL TOPS", colors="pink", material="Polyester",
                     detail="Look lovely in this heart print and bow detail tank by Epic Threads. Bow back detail.",
                    photoId=num+28, categoryId=6)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(14):
        item = Items(itemName="BOY SHIRTS", colors="blue", material="Cotton",
                     detail="He will have a fresh update to casual style in this t-shirt, fashioned in soft fabric for comfortable wear.",
                    photoId=num+38, categoryId=7)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(12):
        item = Items(itemName="BOY JACKETS", colors="navy", material="Polyester",
                     detail="No need to mess with an icon. Gear up your star player in this boys jacket and head out the door. The signature sheen of tricot and 3-Stripes give your MVP a winning adidas style. Wash and wear. Repeat.",
                    photoId=num+52, categoryId=8)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(18):
        item = Items(itemName="BOY PANTS", colors="black", material="Cotton",
                     detail="Jordan alpha dry pant is great for actives this season. Constructed with dry-fit fabrication to keep you dry in every day activities.",
                    photoId=num+59, categoryId=9)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(14):
        item = Items(itemName="TODDLER BOY SHIRTS", colors="blue", material="Cotton",
                     detail="He will have a fresh update to casual style in this t-shirt, fashioned in soft fabric for comfortable wear.",
                    photoId=num+35, categoryId=10)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(12):
        item = Items(itemName="TODDLER BOY JACKETS", colors="navy", material="Polyester",
                     detail="No need to mess with an icon. Gear up your star player in this boys jacket and head out the door. The signature sheen of tricot and 3-Stripes give your MVP a winning adidas style. Wash and wear. Repeat.",
                     photoId=num+51, categoryId=11)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(18):
        item = Items(itemName="TODDLER BOY PANTS", colors="black", material="Polyester",
                     detail="Jordan alpha dry pant is great for actives this season. Constructed with dry-fit fabrication to keep you dry in every day activities.",
                     photoId=num+59, categoryId=12)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    item = Items(itemName="GRIL DRESS", colors="pink", material="Cotton",
                 detail="Textured gauze ruffle maci dress with necklace. Imported.",
                 photoId=5, categoryId=1)
    # item.sizes.push(1) 
    db.session.add(item)

    item = Items(itemName="GIRL PANT", colors="orange", material="Cotton",
                 detail="A colorful floral print creates the fun, fresh look of these comfortable leggings from Ideology.",
                 photoId=15, categoryId=2)
    # item.sizes.push(1) 
    db.session.add(item)

    item = Items(itemName="GIRL TOP", colors="pink", material="Cotton",
                 detail="Look lovely in this heart print and bow detail tank by Epic Threads. Bow back detail.",
                 photoId=31, categoryId=3)
        # item.sizes.push(1) 
    db.session.add(item)

    item = Items(itemName="TODDLER GRIL DRESS", colors="yellow", material="Polyester",
                 detail="Textured gauze ruffle maci dress with necklace. Imported.",
                 photoId=num+9, categoryId=4)
    # item.sizes.push(1) 
    db.session.add(item)

    item = Items(itemName="TODDLER GIRL PANTS", colors="blue", material="Cotton",
                 detail="A colorful floral print creates the fun, fresh look of these comfortable leggings from Ideology.",
                 photoId=20, categoryId=5)
        # item.sizes.push(1) 
    db.session.add(item)

    item = Items(itemName="TODDLER GIRL TOPS", colors="pink", material="Polyester",
                 detail="Look lovely in this heart print and bow detail tank by Epic Threads. Bow back detail.",
                 photoId=35, categoryId=6)
    db.session.add(item)

    item = Items(itemName="BOY SHIRTS", colors="blue", material="Cotton",
                 detail="He will have a fresh update to casual style in this t-shirt, fashioned in soft fabric for comfortable wear.",
                 photoId=num+40, categoryId=7)
    # item.sizes.push(1) 
    db.session.add(item)
    
    item = Items(itemName="BOY JACKETS", colors="navy", material="Polyester",
                 detail="No need to mess with an icon. Gear up your star player in this boys jacket and head out the door. The signature sheen of tricot and 3-Stripes give your MVP a winning adidas style. Wash and wear. Repeat.",
                 photoId=55, categoryId=8)
    # item.sizes.push(1) 
    db.session.add(item)

    item = Items(itemName="BOY PANTS", colors="black", material="Cotton",
                 detail="Jordan alpha dry pant is great for actives this season. Constructed with dry-fit fabrication to keep you dry in every day activities.",
                 photoId=59, categoryId=9)
    # item.sizes.push(1) 
    db.session.add(item)

    item = Items(itemName="TODDLER BOY SHIRTS", colors="blue", material="Cotton",
                 detail="He will have a fresh update to casual style in this t-shirt, fashioned in soft fabric for comfortable wear.",
                 photoId=35, categoryId=10)
    # item.sizes.push(1) 
    db.session.add(item)
    
    item = Items(itemName="TODDLER BOY JACKETS", colors="navy", material="Polyester",
                 detail="No need to mess with an icon. Gear up your star player in this boys jacket and head out the door. The signature sheen of tricot and 3-Stripes give your MVP a winning adidas style. Wash and wear. Repeat.",
                 photoId=51, categoryId=11)
    # item.sizes.push(1) 
    db.session.add(item)

    item = Items(itemName="TODDLER BOY PANTS", colors="black", material="Polyester",
                 detail="Jordan alpha dry pant is great for actives this season. Constructed with dry-fit fabrication to keep you dry in every day activities.",
                 photoId=59, categoryId=12)
    # item.sizes.push(1) 
    db.session.add(item)

    db.session.commit()


def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()


def seed_item_sizes():
    # items = db.Items.query.all()
    # allsizes = db.Sizes.query.all()
    # for item in items:
    #     item.Sizes.extend(allsizes)
    db.session.execute(f"""insert into item_sizes ("sizeId", "itemId")
    values ({1}, {3});""")
    db.session.commit()


def undo_item_sizes():
    db.session.execute('TRUNCATE item_sizes RESTART IDENTITY CASCADE;')
    db.session.commit()


# def seed_user_items():
#     items = db.Items.query.all()
#     users = db.User.query.all()
#     for item in items:
#         item.Users.append(users)
