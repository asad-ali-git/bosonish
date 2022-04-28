<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    

    public function email(){
        $data = ['name' => 'Saad'];
            Mail::send('email', $data, function($message) {
                $message->to('Asad.boson.57@gmail.com');
                $message->subject('Email sent');
            } );
    }
}
