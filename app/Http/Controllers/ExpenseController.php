<?php

namespace App\Http\Controllers;

use App\Http\Resources\GeneralResourceCollection;
use App\Models\Expense;
use App\Models\Group;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;


class ExpenseController extends Controller
{
    //
    public function store(Request $request)
    {
        if ($request->id) {
            $this->validate($request, [
                'name' => 'required'
            ]);
        } else {
            $this->validate($request, [
                'name' => 'required|unique:expenses',
                'amount' => 'required|int',
                'paid_by' => 'required',
                'group_id' => 'required',
            ]);
        }
        $data = $request->id ? Expense::findOrFail($request->id) : new Expense;
        
        $data->name = $request->name;
        $data->amount = $request->amount;
        $data->paid_by = $request->paid_by;
        $data->group_id = $request->group_id;
        $users = User::all();
        foreach($users as $user) {
            $emails[] = $user->email;
        }
        $arr = ['name' => 'Saad'];
        Mail::send('email', $arr, function ($message) use ($emails) {
            $message->to($emails);
            $message->subject('Email send to Saad');
        });
        $data->save();

        $users = User::all();
        foreach($users as $user) {
            $emails[] = $user->email;
        }
        $data = ['name' => 'User'];
        Mail::send('email', $data, function ($message) use ($emails) {

            $message->to($emails);
            $message->subject('Send Email To All Users');
        });

        return response()->json([
            'success'   =>  1,
            'message'   =>  ($request->id) ? 'Expense has been updated' : 'Expense has been created.',
    ]);
    }

    public function getUser()
    {
        $user = User::all();
        return $user;
    }
    public function fetchExpenses()
    {
        $data = Group::where('type', 'Expenses')->get();
        return $data;
    }



    public function fetch(Request $request)
    {
        $searchAbles = ['name', 'amount'];
        $length = $request->input('length');
        $orderBy = $request->input('sortBy'); //Index
        $dir = ($request->input('sortDesc') == 'true') ? 'DESC' : 'ASC';
        $searchValue = $request->input('search');

        $query = Expense::with(["group", "user"])->orderBy($orderBy, $dir);

        if ($searchValue) {
            $query->where(function ($query) use ($searchValue, $searchAbles) {
                foreach ($searchAbles as $c) {
                    $query->orWhere($c, 'like', '%' . $searchValue . '%');
                }
            });
        }
        $data = $query->paginate($length);

        return new GeneralResourceCollection($data);
    }

    public function destroy(Request $request)
    {
        try {
            $expenses = Expense::findOrFail($request->id);
            $expenses->forceDelete(); // Now force delete will work regardless of whether the pivot table has cascading delete
            $success = 'Group has been deleted.';
            return response()->json([
                'success' => 1,
                'message' => $success
            ]);
        } catch (ModelNotFoundException $ex) {
            if ($ex instanceof ModelNotFoundException) {
                return response()->json([
                    'success' => 0,
                    'message' => 'Something went Wrong'
                ]);
            }
        }
    }

    public function all()
    {
        $expenses = Expense::query()->select(['id as value','name as label'])->get();
        return response()->json($expenses);

    }
}
