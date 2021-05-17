from app.models import db, Categories


def seed_categories():
    category1 = Categories(categoryName="GRIL DRESSES", mainCategoryId=1)
    category2 = Categories(categoryName="GIRL PANTS", mainCategoryId=1)
    category3 = Categories(categoryName="GIRL TOPS",
                           mainCategoryId=1)
    category4 = Categories(categoryName="TODDLER GRIL DRESSES", mainCategoryId=2)
    category5 = Categories(categoryName="TODDLER GIRL PANTS", mainCategoryId=2)
    category6 = Categories(categoryName="TODDLER GIRL TOPS", mainCategoryId=2)
    category7 = Categories(categoryName="BOY SHIRTS", mainCategoryId=3)
    category8 = Categories(categoryName="BOY JACKETS", mainCategoryId=3)
    category9 = Categories(categoryName="BOY PANTS", mainCategoryId=3)
    category10 = Categories(categoryName="TODDLER BOY SHIRTS", mainCategoryId=4)
    category11 = Categories(categoryName="TODDLER BOY JACKETS", mainCategoryId=4)
    category12 = Categories(categoryName="TODDLER BOY PANTS", mainCategoryId=4)
    
    db.session.add(category1)
    db.session.add(category2)
    db.session.add(category3)
    db.session.add(category4)
    db.session.add(category5)
    db.session.add(category6)
    db.session.add(category7)
    db.session.add(category8)
    db.session.add(category9)
    db.session.add(category10)
    db.session.add(category11)
    db.session.add(category12)
    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()