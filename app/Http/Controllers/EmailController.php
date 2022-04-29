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
        $data = ['name' => 'User'];
        Mail::send('email', $data, function ($message) use ($emails) {

            $message->to($emails);
            $message->subject('Send Email To All Users');
        });
    }
}
