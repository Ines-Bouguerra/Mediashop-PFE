# Generated by Django 3.0.5 on 2021-02-14 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=255)),
                ('description', models.TextField(max_length=255)),
                ('domaine', models.CharField(max_length=255)),
                ('name', models.CharField(max_length=255)),
                ('reference', models.CharField(max_length=255)),
                ('discount', models.CharField(max_length=255)),
                ('url', models.URLField()),
                ('timestamp', models.DateField(auto_now_add=True)),
                ('brand', models.CharField(max_length=255)),
                ('priceString', models.CharField(max_length=255)),
                ('retailer', models.CharField(max_length=255)),
                ('marketplace', models.CharField(max_length=255)),
                ('price', models.FloatField()),
                ('currency', models.CharField(max_length=3)),
                ('sub_category', models.CharField(max_length=255)),
                ('country', models.CharField(max_length=255)),
                ('short_description', models.TextField(max_length=255, unique=True)),
                ('old_price', models.FloatField()),
                ('image', models.URLField()),
                ('marketplaceId', models.CharField(max_length=255)),
            ],
        ),
    ]
