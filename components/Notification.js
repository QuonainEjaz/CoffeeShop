import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Notification = () => {
  // Sample notifications data
  const initialNotifications = [
    { id: '1', title: 'Order Update', message: 'Your order has been shipped.', date: '2025-02-10', read: false },
    { id: '2', title: 'Promo Alert', message: 'Get 20% off on your next purchase.', date: '2025-02-09', read: false },
    { id: '3', title: 'System Alert', message: 'There was a problem with your last payment.', date: '2025-02-08', read: true },
    { id: '4', title: 'Reminder', message: 'Don’t forget to check your wishlist items!', date: '2025-02-07', read: false },
  ];

  // State for notifications
  const [notifications, setNotifications] = useState(initialNotifications);

  // Mark notification as read
  const markAsRead = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification
    );
    setNotifications(updatedNotifications);
  };

  // Delete a notification
  const deleteNotification = (id) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !== id);
    setNotifications(updatedNotifications);
  };

  // Render notification item
  const renderNotificationItem = ({ item }) => {
    return (
      <View style={[styles.notificationItem, item.read && styles.readNotification]}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text>{item.message}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>

        <View style={styles.actionButtons}>
          {!item.read && (
            <TouchableOpacity
              style={styles.markAsReadButton}
              onPress={() => markAsRead(item.id)}
            >
              <Text style={styles.actionButtonText}>Mark as Read</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deleteNotification(item.id)}
          >
            <Text style={styles.actionButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      {notifications.length === 0 ? (
        <Text>No notifications to show.</Text>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderNotificationItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  notificationItem: {
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  readNotification: {
    backgroundColor: '#e0e0e0',
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationDate: {
    fontSize: 12,
    color: '#888',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  markAsReadButton: {
    padding: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButton: {
    padding: 8,
    backgroundColor: '#FF5733',
    borderRadius: 5,
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Notification;
