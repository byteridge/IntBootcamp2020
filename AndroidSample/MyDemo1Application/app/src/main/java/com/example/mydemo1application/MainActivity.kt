package com.example.mydemo1application

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.ImageView
import androidx.appcompat.app.AppCompatActivity
import java.util.*

class MainActivity : AppCompatActivity() {

    lateinit var bright_image: ImageView

    val TAG = MainActivity::class.java.simpleName

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        Log.i(TAG, "onCreateCalled")
//        bright_image  = findViewById(R.id.bright_image)
//        Todo include btn reference in code
        /*val btnChange:Button = findViewById(R.id.btnChange)
        btnChange.text = "text1"*/
//        Todo add onclickListener to button
        /*btnChange.setOnClickListener {
               Toast.makeText(this, "button clicked", Toast.LENGTH_SHORT).show()
            }*/
//        Todo refer xml file
    }

    override fun onStart() {
        super.onStart()
        Log.i(TAG, "onStartCalled")
    }

    override fun onResume() {
        super.onResume()
        Log.i(TAG, "onResumeCalled")
    }

    override fun onPause() {
        super.onPause()
        Log.i(TAG, "onPauseCalled")
    }

    override fun onStop() {
        super.onStop()
        Log.i(TAG, "onStopCalled")
    }

    override fun onDestroy() {
        super.onDestroy()
        Log.i(TAG, "onDestroyCalled")
    }

//        Todo add functionality to btn click
//        Todo add into onclick functionality
    fun changeNo() {
//             Todo findView to change text
//             val tvTxt: TextView = findViewById(R.id.tvTxt)
        val randomInt = Random().nextInt(7) + 1
//             tvTxt.text = randomInt.toString()
//        Todo refer xml file

//            Todo include for imageView Implementation
//            val drawableResource = when (randomInt) {
//                1 -> R.drawable.ic_brightness_1_black_24dp
//                2 -> R.drawable.ic_brightness_2_black_24dp
//                3 -> R.drawable.ic_brightness_3_black_24dp
//                4 -> R.drawable.ic_brightness_4_black_24dp
//                5 -> R.drawable.ic_brightness_5_black_24dp
//                6 -> R.drawable.ic_brightness_5_black_24dp
//                else -> R.drawable.ic_brightness_7_black_24dp
//            }
//
//            val bright_image: ImageView = findViewById(R.id.bright_image)
//
//            bright_image.setImageResource(drawableResource)
    }

//    val newScreenIntent = Intent(this, NewScreen::class.java)
//    startActivity(newScreenIntent)
}


