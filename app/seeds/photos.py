from app.models import db, Photos


def seed_photos():
    dress_urls = [
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-dresses/18516975_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-dresses/18694249_fpx.webp",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-dresses/18721895_fpx.webp",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-dresses/18724277_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-dresses/18724322_fpx.webp",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-dresses/18798108_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-dresses/18798129_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-dresses/18798131_fpx.webp",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-dresses/18798138_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-dresses/18823398_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-dresses/18823404_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-dresses/18823405_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-dresses/18694249_fpx.webp",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-dresses/18721895_fpx.webp",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-dresses/18724277_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-dresses/18724322_fpx.webp",
    ]

    girl_pants = [
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-pants/13892542_fpx.webp",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-pants/17977541_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-pants/17993122_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-pants/17993123_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-pants/18380999_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-pants/18425527_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-pants/13304142_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-pants/18677543_fpx.jpeg",
    ]

    girl_tops = [
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-shirts%26tops/16794792_fpx.webp",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-shirts%26tops/16794978_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-shirts%26tops/16794983_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-shirts%26tops/18424321_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-shirts%26tops/18618843_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-shirts%26tops/18665987_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-shirts%26tops/18665989_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-shirts%26tops/18687359_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-shirts%26tops/18857529_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/girls-shirts%26tops/18857546_fpx.jpeg",
    ]

    boy_shirts = [
        "https://hebacapstone.s3.us-east-2.amazonaws.com/tboy-shirts/18459294_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/tboy-shirts/18509168_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/tboy-shirts/18575150_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/tboy-shirts/18509191_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/tboy-shirts/18509373_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/tboy-shirts/18517666_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/tboy-shirts/18574404_fpx.webp",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/tboy-shirts/18575150_fpx.jpeg",
        
    ]

    boy_jackets = [
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/17909569_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/17980557_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18135301_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18135306_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18144728_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18206590_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18282485_fpx+(1).jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18828505_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/boy-jackets/18436081_fpx.jpeg",
    ]

    boy_pants = [
        "https://hebacapstone.s3.us-east-2.amazonaws.com/tboy-pants/14468832_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/tboy-pants/17933784_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/tboy-pants/17990996_fpx.webp",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/tboy-pants/18046404_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/tboy-pants/18057868_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/tboy-pants/18985930_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/tboy-pants/8901426_fpx.jpeg",
        "https://hebacapstone.s3.us-east-2.amazonaws.com/tboy-pants/8924579_fpx.webp",
    ]

    for num in range(16):
        photo = Photos(photo_url=dress_urls[num])
        db.session.add(photo)
    db.session.commit()

    for num in range(8):
        photo = Photos(photo_url=girl_pants[num])
        db.session.add(photo)
    db.session.commit()

    for num in range(10):
        photo = Photos(photo_url=girl_tops[num])
        db.session.add(photo)
    db.session.commit()

    for num in range(8):
        photo = Photos(photo_url=boy_shirts[num])
        db.session.add(photo)
    db.session.commit()

    for num in range(9):
        photo = Photos(photo_url=boy_jackets[num])
        db.session.add(photo)
    db.session.commit()

    for num in range(8):
        photo = Photos(photo_url=boy_pants[num])
        db.session.add(photo)
    db.session.commit()


def undo_photos():
    db.session.execute('TRUNCATE photos RESTART IDENTITY CASCADE;')
    db.session.commit()