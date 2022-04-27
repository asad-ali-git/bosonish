<?php

namespace App\Http\Controllers;

use App\Http\Resources\GeneralResourceCollection;
use App\Models\Income;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class IncomeController extends Controller
{

        public function store(Request $request)
    {

        $id = $request->id;
        if ($id) {
            $this->validate($request, [
                'name' => 'required',
            ]);
        } else {
            $this->validate($request, [
                'name' => 'required|unique:expenses',
                'amount' => 'required|int',
                'group_id' => 'required',
                'collected_by' => 'required',
            ]);
        }

        $data = $id ? Income::findOrFail($id) : new Income;

        $data->name = $request->name;
        $data->amount = $request->amount;
        $data->collected_by = $request->collected_by;
        $data->group_id = $request->group_id;
        $data->save();

        return response()->json([
            'success'   =>  1,
            'message'   => ($request->id) ? 'Income has been updated' : 'Income has been created.',
        ]);
    }


    public function fetch(Request $request)
    {
        $searchAbles = ['name', 'amount'];
        $length = $request->input('length');
        $orderBy = $request->input('sortBy'); //Index
        $dir = ($request->input('sortDesc') == 'true') ? 'DESC' : 'ASC';
        $searchValue = $request->input('search');

        $query = Income::with("group", "user")->orderBy($orderBy, $dir);

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
            $group = Income::findOrFail($request->id);
            $group->Delete();
            $success = 'Income has been deleted.';
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
}
