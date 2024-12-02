'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ThumbsUp } from 'lucide-react';

type Comment = {
  id: string;
  author: {
    name: string;
    location: string;
    avatar?: string;
  };
  rating: number;
  date: string;
  content: string;
};

type CommentSectionProps = {
  comments: Comment[];
  totalLikes: number;
};

const CommentSection = ({ comments, totalLikes }: CommentSectionProps) => {
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would typically make an API call to save the comment
    await new Promise(resolve => setTimeout(resolve, 1000));
    setNewComment('');
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-8">
      {/* Engagement Stats */}
      <div className="flex items-center gap-8 mb-8">
        <div>
          <div className="text-2xl font-bold">{totalLikes.toLocaleString()}</div>
          <div className="text-sm text-neutral-600">Likes</div>
        </div>
        <button 
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full hover:bg-neutral-50 transition-colors"
        >
          <ThumbsUp className="w-4 h-4" />
          Like
        </button>
      </div>

      {/* Reviews Header */}
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <div className="flex items-center">
          <span className="text-xl font-semibold">5.0</span>
          <span className="mx-1">·</span>
          <span className="text-neutral-600">{comments.length} reviews</span>
        </div>
      </div>

      {/* Comments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-4">
            <div className="flex items-start gap-4">
              {comment.author.avatar ? (
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={comment.author.avatar}
                    alt={comment.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center">
                  <span className="text-lg font-medium text-neutral-600">
                    {comment.author.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                <div className="font-medium">{comment.author.name}</div>
                <div className="text-sm text-neutral-600">
                  {comment.author.location}
                </div>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <span className="mx-2">·</span>
                  <span className="text-sm text-neutral-600">{comment.date}</span>
                </div>
              </div>
            </div>
            <p className="text-neutral-800">{comment.content}</p>
            <button className="text-sm font-medium hover:underline">
              Show more
            </button>
          </div>
        ))}
      </div>

      {/* New Comment Form */}
      <div className="mt-12 border-t pt-8">
        <h3 className="text-lg font-semibold mb-4">Leave a review</h3>
        <form onSubmit={handleSubmitComment} className="space-y-4">
          <div>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your experience..."
              className="w-full min-h-[100px] p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
