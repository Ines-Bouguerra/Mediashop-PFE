# Generated by Django 3.0.5 on 2021-06-30 18:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0008_alter_category_id'),
        ('brand', '0002_alter_brand_id'),
        ('products', '0016_auto_20210630_0914'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='brand_slug',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='brand', to='brand.Brand'),
        ),
        migrations.AddField(
            model_name='product',
            name='category_slug',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='category', to='category.Category'),
        ),
        migrations.AlterField(
            model_name='product',
            name='brand',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
