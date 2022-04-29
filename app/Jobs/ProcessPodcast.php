<?php

namespace App\Jobs;

use App\Models\expense;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

use App\Models\User;
Use Illuminate\Support\Facades\Mail;

class ProcessPodcast implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */

    private $expense = null;
    public function __construct(Expense $expense)
    {
        //
        $this->expense = $expense;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $users = User::all();
        foreach($users as $user) {
            $emails[] = $user->email;
        }
        $arr = ['name' => 'Saad'];
        Mail::send('email', $arr, function ($message) use ($emails) {
            $message->to($emails);
            $message->subject('Send Emails To All Users');
        });
    }
}
