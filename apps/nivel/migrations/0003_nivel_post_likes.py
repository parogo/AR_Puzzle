# Generated by Django 4.2.11 on 2024-06-30 12:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nivel', '0002_alter_nivel_post_slug_alter_nivel_post_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='nivel_post',
            name='likes',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]