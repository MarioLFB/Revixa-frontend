import React, { useState, useEffect, useContext } from 'react';
import { likePost, unlikePost } from '../services/postService';
import AuthContext from '../context/AuthContext';