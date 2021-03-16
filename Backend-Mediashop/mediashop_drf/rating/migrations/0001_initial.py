# Generated by Django 3.0.5 on 2021-03-16 20:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('rating_created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_creator_rating', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Ratings',
            },
        ),
    ]
