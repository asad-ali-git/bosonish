<?php

namespace App\Http\Controllers;

use App\Http\Resources\GeneralResourceCollection;
use App\Models\Group;
use GrahamCampbell\ResultType\Success;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\TryCatch;

class GroupController extends Controller
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
                'name' => 'required|unique:groups',
                'type' => 'required',
            ]);
        }
        $data = $request->id ? Group::findOrFail($request->id) : new Group;
        if (!$request->id) {
            $data->name         = $request->name;
        }

        $data->name = $request->name;
        $data->type = $request->type;
        $data->save();


        return response()->json([
            'success'   =>  1,
            'message'   => ($request->id) ? 'Group has been updated' : 'Group has been created.',
        ]);
    }

    public function fetch(Request $request)
    {
        $searchAbles = ['name', 'type'];
        $length = $request->input('length');
        $orderBy = $request->input('sortBy'); //Index
        $dir = ($request->input('sortDesc') == 'true') ? 'DESC' : 'ASC';
        $searchValue = $request->input('search');

        $query = Group::orderBy($orderBy, $dir);

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

    public function fetchIncomeGroups() {
        $incomeGroup = Group::where('type', 'Incomes')->get();
        return $incomeGroup;
    }

    public function all()
    {
        $groups = Group::query()->select(['id as value', 'name as label'])->get();
        return response()->json($groups);
    }

    public function destroy(Request $request)
    {
        try {
            $groups = Group::findOrFail($request->id);
            $groups->forceDelete();
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
}
