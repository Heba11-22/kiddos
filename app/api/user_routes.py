from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


# Route for getting all the saved items for a user:
@user_routes.route('/<int:id>/saveditems')
@login_required
def user_items(id):
    # user = User.query.get(id)
    # return user.to_dict()
    print("111111/////////////")
    db.session.execute(f"""SELECT * FROM user_items WHERE "userId" = {id};""")
    print("2222222111111/////////////")
    items = User.query.filter(User.id == 1).all()
    print("/////////////", items)
    return {"items": [item.to_dict() for item in items]}


# Post Route for save an item in a user saved_items page:
@user_routes.route('/<int:item_id>', methods=['POST'])
@login_required
def post_save_an_item(item_id):
    user_id = current_user.id
    db.session.execute(f"""insert into user_items ("userId", "itemId")
    values ({user_id}, {item_id});""")
    db.session.commit()
    items = User.query.filter(User.id == user_id).all()
    return {"items": [item.to_dict() for item in items]}