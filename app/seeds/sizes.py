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

    # for num in range(16):
    #     item = Items(itemName="dress", colors="black", material="cotton",
    #                  detail=fake.text(), photoId=num+1, categoryId=1)
    #     print("------------", item.sizes) 
    #     print("+++++++++++", item) 
    #     db.session.add(item)
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
                 photoId=9, categoryId=4)
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
                 photoId=40, categoryId=7)
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
    for i in range(4):
        for size in [size1, size2, size3, size4]:
            item.sizes.append(size)
        db.session.commit()
        # size1.items.append(item)
    db.session.commit()
    

def undo_sizes():
    db.session.execute('TRUNCATE sizes RESTART IDENTITY CASCADE;')
    db.session.commit()


