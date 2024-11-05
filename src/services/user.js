import api from './api';

export async function getUserProfile() {
  try {
    const response = await api.get('/api/user/profile/');
    return response.data;
  } catch (error) {
    // console.error('Error fetching user profile:', error);
    throw error;
  }
}

export async function updateEmail(email) {
  try {
    const response = await api.put('/api/user/update-email/', { email });
    return response.data;
  } catch (error) {
    // console.error('Error updating email:', error);
    throw error;
  }
}

export async function updatePassword(currentPassword, newPassword) {
  try {
    const response = await api.put('/api/user/update-password/', {
      current_password: currentPassword,
      new_password: newPassword,
    });
    return response.data;
  } catch (error) {
    // console.error('Error updating password:', error);
    throw error;
  }
}
