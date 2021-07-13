from app.models import db, Items
from app.models.items import User
from faker import Faker

fake = Faker()


def seed_items():
    for num in range(16):
        item = Items(itemName="GIRL DRESS", colors="pink", material="Cotton",
                     detail="Textured gauze ruffle maci dress with necklace. Imported.",
                     photoId=num+1, categoryId=1)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(8):
        item = Items(itemName="GIRL PANT", colors="black", material="Cotton",
                     detail="A colorful floral print creates the fun, fresh look of these comfortable leggings from Ideology.",
                     photoId=num+17, categoryId=2)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(10):
        item = Items(itemName="GIRL TOP", colors="pink", material="Cotton",
                     detail="Look lovely in this heart print and bow detail tank by Epic Threads. Bow back detail.",
                     photoId=num+25, categoryId=3)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(16):
        item = Items(itemName="TODDLER GIRL DRESS", colors="pink", material="Polyester",
                     detail="Textured gauze ruffle maci dress with necklace. Imported.",
                    photoId=num+1, categoryId=4)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(8):
        item = Items(itemName="TODDLER GIRL PANT", colors="navy", material="Cotton",
                     detail="A colorful floral print creates the fun, fresh look of these comfortable leggings from Ideology.",
                    photoId=num+17, categoryId=5)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(10):
        item = Items(itemName="TODDLER GIRL TOP", colors="pink", material="Polyester",
                     detail="Look lovely in this heart print and bow detail tank by Epic Threads. Bow back detail.",
                    photoId=num+25, categoryId=6)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(8):
        item = Items(itemName="BOY SHIRT", colors="gray", material="Cotton",
                     detail="He will have a fresh update to casual style in this t-shirt, fashioned in soft fabric for comfortable wear.",
                    photoId=num+35, categoryId=7)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(9):
        item = Items(itemName="BOY JACKET", colors="black", material="Polyester",
                     detail="No need to mess with an icon. Gear up your star player in this boys jacket and head out the door. The signature sheen of tricot and 3-Stripes give your MVP a winning adidas style. Wash and wear. Repeat.",
                    photoId=num+43, categoryId=8)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(8):
        item = Items(itemName="BOY PANT", colors="beige", material="Cotton",
                     detail="Jordan alpha dry pant is great for actives this season. Constructed with dry-fit fabrication to keep you dry in every day activities.",
                    photoId=num+52, categoryId=9)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(8):
        item = Items(itemName="TODDLER BOY SHIRT", colors="gray", material="Cotton",
                     detail="He will have a fresh update to casual style in this t-shirt, fashioned in soft fabric for comfortable wear.",
                    photoId=num+35, categoryId=10)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(9):
        item = Items(itemName="TODDLER BOY JACKET", colors="black", material="Polyester",
                     detail="No need to mess with an icon. Gear up your star player in this boys jacket and head out the door. The signature sheen of tricot and 3-Stripes give your MVP a winning adidas style. Wash and wear. Repeat.",
                     photoId=num+43, categoryId=11)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    for num in range(8):
        item = Items(itemName="TODDLER BOY PANT", colors="beige", material="Polyester",
                     detail="Jordan alpha dry pant is great for actives this season. Constructed with dry-fit fabrication to keep you dry in every day activities.",
                     photoId=num+52, categoryId=12)
        # item.sizes.push(1) 
        db.session.add(item)
    db.session.commit()

    item = Items(itemName="GRIL DRESS", colors="blue", material="Cotton",
                 detail="Textured gauze ruffle maci dress with necklace. Imported.",
                 photoId=15, categoryId=1)
    # item.sizes.push(1) 
    db.session.add(item)

    item = Items(itemName="GIRL PANT", colors="navy", material="Cotton",
                    detail="A colorful floral print creates the fun, fresh look of these comfortable leggings from Ideology.",
                    photoId=17, categoryId=2)
    # item.sizes.push(1) 
    db.session.add(item)

    item = Items(itemName="Girl Top Heart Print", colors="pink", material="Cotton",
                 detail="Look lovely in this heart print and bow detail tank by Epic Threads. Bow back detail.",
                 photoId=31, categoryId=3)
        # item.sizes.push(1) 
    db.session.add(item)

    item = Items(itemName="TODDLER GRIL DRESS", colors="pink", material="Polyester",
                 detail="Textured gauze ruffle maci dress with necklace. Imported.",
                 photoId=7, categoryId=4)
    # item.sizes.push(1) 
    db.session.add(item)

    item = Items(itemName="TODDLER GIRL PANTS", colors="pink", material="Cotton",
                 detail="A colorful floral print creates the fun, fresh look of these comfortable leggings from Ideology.",
                 photoId=20, categoryId=5)
        # item.sizes.push(1) 
    db.session.add(item)

    item = Items(itemName="TODDLER GIRL TOP", colors="green", material="Polyester",
                 detail="Look lovely in this heart print and bow detail tank by Epic Threads. Bow back detail.",
                 photoId=29, categoryId=6)
    db.session.add(item)

    item = Items(itemName="BOY SHIRT", colors="white", material="Cotton",
                 detail="He will have a fresh update to casual style in this t-shirt, fashioned in soft fabric for comfortable wear.",
                 photoId=39, categoryId=7)
    # item.sizes.push(1) 
    db.session.add(item)
    
    item = Items(itemName="BOY JACKET", colors="navy", material="Polyester",
                 detail="No need to mess with an icon. Gear up your star player in this boys jacket and head out the door. The signature sheen of tricot and 3-Stripes give your MVP a winning adidas style. Wash and wear. Repeat.",
                 photoId=48, categoryId=8)
    # item.sizes.push(1) 
    db.session.add(item)

    item = Items(itemName="BOY PANT", colors="olive", material="Cotton",
                 detail="Jordan alpha dry pant is great for actives this season. Constructed with dry-fit fabrication to keep you dry in every day activities.",
                 photoId=56, categoryId=9)
    # item.sizes.push(1) 
    db.session.add(item)

    item = Items(itemName="TODDLER BOY SHIRT", colors="yellow", material="Cotton",
                 detail="He will have a fresh update to casual style in this t-shirt, fashioned in soft fabric for comfortable wear.",
                 photoId=35, categoryId=10)
    # item.sizes.push(1) 
    db.session.add(item)
    
    item = Items(itemName="TODDLER BOY JACKET", colors="red", material="Polyester",
                 detail="No need to mess with an icon. Gear up your star player in this boys jacket and head out the door. The signature sheen of tricot and 3-Stripes give your MVP a winning adidas style. Wash and wear. Repeat.",
                 photoId=51, categoryId=11)
    # item.sizes.push(1) 
    db.session.add(item)

    item = Items(itemName="TODDLER BOY PANT", colors="beige", material="Polyester",
                 detail="Jordan alpha dry pant is great for actives this season. Constructed with dry-fit fabrication to keep you dry in every day activities.",
                 photoId=58, categoryId=12)
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
