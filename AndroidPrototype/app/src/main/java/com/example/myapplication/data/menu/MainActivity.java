package com.example.myapplication.data.menu;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.view.View;
import android.os.Bundle;
import android.widget.ImageButton;


import com.example.myapplication.R;
import com.example.myapplication.data.cater.CaterActivity;
import com.example.myapplication.data.eat.EatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        ImageButton eat = (ImageButton) findViewById(R.id.imageButton2);
        eat.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v) {
                goToSecondActivity();
            }
        });

        ImageButton cater = (ImageButton) findViewById(R.id.imageButton3);
        cater.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v) {
                gotToThirdActivity();
            }
        });
    }

    private void goToSecondActivity() {
        Intent intent = new Intent(this, EatActivity.class);
        startActivity(intent);
    }

    private void gotToThirdActivity()
    {
        Intent intent = new Intent(this, CaterActivity.class);
        startActivity(intent);
    }

}
