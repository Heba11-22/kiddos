from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, User, Items

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
@user_routes.route('/<int:user_id>/saveditems')
@login_required
def user_items(user_id):
    user = User.query.filter(User.id == user_id).first()
    # print(">>>>>>>>>>>>>>", user)
    return user.to_dict()


# Post Route for save an item in a user saved_items page:
@user_routes.route('/<int:user_id>/saveditems/<int:item_id>', methods=['POST'])
# @login_required
def post_save_an_item(user_id, item_id):
    # user_id = current_user.id
    user = User.query.filter(User.id == user_id).first()
    # item = Items.query.filter(Items.id == item_id).first()
    db.session.execute(f"""insert into user_items ("userId", "itemId")
    values ({user_id}, {item_id});""")
    db.session.commit()
    return user.to_dict()

# DELETE Route for save an item in a user saved_items page: <<<<<< NOT DONE
@user_routes.route('/<int:user_id>/saveditems/<int:item_id>', methods=['DELETE'])
# @login_required
def post_save_an_item(user_id, item_id):
    # user_id = current_user.id
    user = User.query.filter(User.id == user_id).first()
    # item = Items.query.filter(Items.id == item_id).first()
    db.session.execute(f"""insert into user_items ("userId", "itemId")
    values ({user_id}, {item_id});""")
    db.session.commit()
    return user.to_dict()