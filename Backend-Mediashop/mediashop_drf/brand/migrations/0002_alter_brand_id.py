# Generated by Django 3.2.3 on 2021-05-26 09:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('brand', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
