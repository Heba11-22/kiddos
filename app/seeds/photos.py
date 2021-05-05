from app.models import db, Photos


def seed_photos():
    urls = [
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/17909569_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/17974672_fpx.webp",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/17980557_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18135301_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18135306_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18135306_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18135306_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18144728_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18206588_fpx.webp",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18206590_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18282469_fpx.webp",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18282469_fpx.webp",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18282485_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18436080_fpx.webp",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18436081_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18828505_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18828509_fpx.jpeg",
    ]

    for num in range(16):
        photo = Photos(photo_url=urls[num])
        db.session.add(photo)
    db.session.commit()


def undo_photos():
    db.session.execute('TRUNCATE photos RESTART IDENTITY CASCADE;')
    db.session.commit()