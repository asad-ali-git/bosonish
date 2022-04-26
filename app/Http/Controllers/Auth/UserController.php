<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Get authenticated user.
     */
    public function current(Request $request)
    {
        $user = $request->user()->toArray();
        // $user['twoFactorQrCodeSvg'] = auth()->user()->twoFactorQrCodeSvg();
        return response()->json($user);
    }

}
