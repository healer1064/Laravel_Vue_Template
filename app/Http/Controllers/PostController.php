<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // all posts
    public function index()
    {
        $posts = Post::all()->toArray();
        return response()->json($posts, 200);
    }
 
    // add post
    public function add(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|unique:posts|max:255',
            'description' => 'required',
            
        ]);

        $post = Post::create([
            'title' => $request->title,
            'description' =>  $request->description,
        ]);
        return response()->json($post, 200);
    }
 
    // edit post
    public function edit($id)
    {
        $post = Post::find($id);
        if ($post) {
            return response()->json($post, 200);
        } else {
            return response()->json('failed', 404);
        }
        
        
    }
 
    // update post
    public function update($id, Request $request)
    {
        $post = Post::find($id);
        $post->update($request->all());
 
        return response()->json('The post successfully updated');
    }
 
    // delete post
    public function delete($id)
    {
        $post = Post::find($id);
        $post->delete();
 
        return response()->json('The post successfully deleted');
    }
}
