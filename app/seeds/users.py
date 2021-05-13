# from werkzeug.security import generate_password_hash  >>>>>Already in the models.<<<<<<
from app.models import db, User
from faker import Faker
import requests
import random

fake = Faker()


# Adds a demo user, you can add other users here if you want
def seed_users():
    url = 'https://api.unsplash.com/photos/random?query=profile&orientation=squarish&count=30&client_id=w7D9hahfveF5lpAyA5ED7oMcmfmnf-34xpUmZsC2ubs'
    r = requests.get(url)
    response = r.json()
    newList = []
    for item in response:
        newList.append(item["urls"]["thumb"])

    demo = User(username='Demo', email='demo@aa.io',
                password='password', avatar_url='https://hebacapstone.s3.us-east-2.amazonaws.com/Screen+Shot+2021-05-05+at+4.55.23+PM.png')

    db.session.add(demo)

    for num in range(5):
        user = User(username=fake.name(), email=fake.email(),
                    password='password',
                    avatar_url=newList[random.randrange(len(newList))])

        db.session.add(user)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()


# def seed_user_items():
#     users = db.User.query.all()
#     items = db.Items.query.all()
#     for user in users:
#         user.Items.extend(items)
