# Generated by Django 3.0.5 on 2021-02-27 19:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('products', '0002_auto_20210214_1939'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='product',
            options={'ordering': ('timestamp',), 'verbose_name_plural': 'Products'},
        ),
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('rating_created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_creator_rating', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('post_text', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('post_created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_creator_post', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Posts',
            },
        ),
        migrations.CreateModel(
            name='Favorite',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(default='admin', max_length=255)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('favorite_created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_creator_favorite', to=settings.AUTH_USER_MODEL)),
                ('product_favorites', models.ManyToManyField(to='products.Product')),
            ],
            options={
                'verbose_name_plural': 'Favorites',
            },
        ),
    ]
