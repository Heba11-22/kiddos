"""empty message

Revision ID: 2881278fe220
Revises: 
Create Date: 2021-05-19 10:56:11.850673

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2881278fe220'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('maincategories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('main_categoryName', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('photos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('photo_url', sa.String(length=500), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('sizes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('size', sa.String(length=40), nullable=False),
    sa.Column('count', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('avatar_url', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('categories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('categoryName', sa.String(length=250), nullable=False),
    sa.Column('mainCategoryId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['mainCategoryId'], ['maincategories.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('itemName', sa.String(length=255), nullable=False),
    sa.Column('colors', sa.String(length=40), nullable=False),
    sa.Column('material', sa.String(length=255), nullable=False),
    sa.Column('detail', sa.Text(), nullable=False),
    sa.Column('photoId', sa.Integer(), nullable=False),
    sa.Column('categoryId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['categoryId'], ['categories.id'], ),
    sa.ForeignKeyConstraint(['photoId'], ['photos.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('carts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('itemId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['itemId'], ['items.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('item_sizes',
    sa.Column('itemId', sa.Integer(), nullable=True),
    sa.Column('sizeId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['itemId'], ['items.id'], ),
    sa.ForeignKeyConstraint(['sizeId'], ['sizes.id'], )
    )
    op.create_table('user_items',
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('itemId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['itemId'], ['items.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_items')
    op.drop_table('item_sizes')
    op.drop_table('carts')
    op.drop_table('items')
    op.drop_table('categories')
    op.drop_table('users')
    op.drop_table('sizes')
    op.drop_table('photos')
    op.drop_table('maincategories')
    # ### end Alembic commands ###
