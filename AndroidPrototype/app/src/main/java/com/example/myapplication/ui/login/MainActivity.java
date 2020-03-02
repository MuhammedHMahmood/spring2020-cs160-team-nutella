package com.example.myapplication.ui.login;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.view.View;
import android.widget.Button;
import android.os.Bundle;
import android.widget.ImageButton;


import com.example.myapplication.R;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        ImageButton cater = (ImageButton) findViewById(R.id.imageButton2);
        cater.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v) {
                goToSecondActivity();
            }
        });

        ImageButton eat = (ImageButton) findViewById(R.id.imageButton3);
        eat.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v) {
                gotToThirdActivity();
            }
        });
    }

    private void goToSecondActivity() {
        Intent intent = new Intent(this, SecondActivity.class);
        startActivity(intent);
    }

    private void gotToThirdActivity()
    {
        Intent intent = new Intent(this, ThirdActivity.class);
        startActivity(intent);
    }

}
