<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function sendEmails()
    {
        $users = User::all();
        foreach($users as $user) {
            $emails[] = $user->email;
        }
        // dd($emails);
        $data = ['name' => 'Saad'];
        Mail::send('email', $data, function ($message) use ($emails) {

            // $boson = 'Saad.57@gmail.com';
            $message->to($emails);
            $message->subject('Email send to Saad');
        });
    }
}
