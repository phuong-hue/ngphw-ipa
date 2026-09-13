import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  const [isDnsOn, setIsDnsOn] = useState(true);
  const [activeProxy, setActiveProxy] = useState(null);
  const [currentTab, setCurrentTab] = useState('Proxy');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* 1. HEADER: Thông tin ứng dụng */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>3105 MANAGER</Text>
          <Text style={styles.headerSubtitle}>com.dts.app3105 • ONLINE</Text>
        </View>
        <Text style={styles.settingsIcon}>⚙️</Text>
      </View>

      {/* 2. THÔNG SỐ THIẾT BỊ */}
      <View style={styles.infoRow}>
        <View style={styles.infoBlock}>
          <Text style={styles.infoLabel}>THIẾT BỊ</Text>
          <Text style={styles.infoValue}>iPhone X</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.infoLabel}>HỆ ĐIỀU HÀNH</Text>
          <Text style={styles.infoValue}>iOS 16.7.16</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.infoLabel}>TƯƠNG THÍCH</Text>
          <Text style={[styles.infoValue, {color: '#00A3C4'}]}>Có Hỗ Trợ</Text>
        </View>
      </View>

      {/* 3. NAVIGATION TABS: Thanh chuyển đổi danh mục */}
      <View style={styles.tabRow}>
        {['Proxy', 'Định Vị', 'Mod NV'].map((tab) => (
          <TouchableOpacity 
            key={tab} 
            style={[styles.tabButton, currentTab === tab && styles.tabActive]} 
            onPress={() => setCurrentTab(tab)}
          >
            <Text style={[styles.tabText, {color: currentTab === tab ? '#00A3C4' : '#888'}]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 4. MAIN CONTENT: Danh sách tính năng */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.subHint}>● Đang dùng DNS mặc định</Text>
        
        {/* KHỐI CÔNG TẮC DNS */}
        <View style={styles.dnsCard}>
          <View style={styles.dnsInfo}>
            <Text style={styles.cardTitle}>DNS Antiband 4.0</Text>
            <Text style={styles.cardDesc}>Chống quét tệp tin hệ thống và bảo mật vùng chứa</Text>
          </View>
          <TouchableOpacity 
            style={[styles.powerBtn, {backgroundColor: isDnsOn ? '#00A3C4' : '#222'}]} 
            onPress={() => setIsDnsOn(!isDnsOn)}
          >
            <Text style={styles.powerBtnText}>I/O</Text>
          </TouchableOpacity>
        </View>

        {/* TIÊU ĐỀ PHÂN KHU TÍNH NĂNG */}
        <Text style={styles.sectionTitle}>┃ PROXY DELTA VIP</Text>
        
        {/* LƯỚI CARD ĐÔI (2 COLUMNS) */}
        <View style={styles.grid}>
<MenuCard title="Proxy Body" desc="Xóa mã độc vùng chứa ứng dụng" id="body" active={activeProxy} setActive={setActiveProxy} />
          <MenuCard title="Proxy Cổ V1" desc="Khóa chặt tệp tin cấu hình gốc" id="v1" active={activeProxy} setActive={setActiveProxy} />
          <MenuCard title="Proxy Cổ V2" desc="Bảo mật chứng chỉ hệ thống ứng dụng" id="v2" active={activeProxy} setActive={setActiveProxy} />
          <MenuCard title="Proxy Magic" desc="Ghi đè và tạo dữ liệu vùng chứa ảo" id="magic" active={activeProxy} setActive={setActiveProxy} />
          <MenuCard title="Proxy Drag V2" desc="Tối ưu hóa tốc độ phản hồi lệnh file" id="dragv2" active={activeProxy} setActive={setActiveProxy} />
        </View>
        <View style={{height: 40}} />
      </ScrollView>
    </SafeAreaView>
  );
}

// Thành phần thiết kế các ô vuông tính năng (Cards)
function MenuCard({ title, desc, id, active, setActive }) {
  const isSelected = active === id;
  return (
    <TouchableOpacity 
      style={[styles.card, isSelected && styles.cardSelected]} 
      onPress={() => setActive(isSelected ? null : id)}
      activeOpacity={0.8}
    >
      <Text style={styles.cardIcon}>{isSelected ? '🔹' : '🔷'}</Text>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDesc}>{desc}</Text>
    </TouchableOpacity>
  );
}

// Toàn bộ cấu hình kiểu dáng, phông chữ và màu sắc chuẩn Dark Mode Delta
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#07090E' },
  header: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12, alignItems: 'center' },
  headerTitle: { color: '#ffffff', fontSize: 20, fontWeight: '900', letterSpacing: 0.5 },
  headerSubtitle: { color: '#666', fontSize: 11, marginTop: 2, fontWeight: '500' },
  settingsIcon: { fontSize: 18, color: '#666' },
  infoRow: { flexDirection: 'row', backgroundColor: '#12161F', marginHorizontal: 16, marginVertical: 8, borderRadius: 12, paddingVertical: 10 },
  infoBlock: { flex: 1, alignItems: 'center' },
  infoLabel: { color: '#666', fontSize: 9, fontWeight: 'bold', letterSpacing: 0.3 },
  infoValue: { color: '#ffffff', fontSize: 13, fontWeight: 'bold', marginTop: 4 },
  tabRow: { flexDirection: 'row', backgroundColor: '#0B0E14', paddingVertical: 2, borderBottomWidth: 1, borderBottomColor: '#12161F' },
  tabButton: { flex: 1, alignItems: 'center', paddingVertical: 12 },
  tabActive: { borderTopWidth: 2, borderTopColor: '#00A3C4' },
  tabText: { fontSize: 13, fontWeight: 'bold' },
  content: { flex: 1, padding: 16 },
  subHint: { color: '#555', fontSize: 11, marginBottom: 8, fontWeight: '500' },
  dnsCard: { flexDirection: 'row', backgroundColor: '#12161F', padding: 16, borderRadius: 14, alignItems: 'center', marginBottom: 16 },
  dnsInfo: { flex: 1, paddingRight: 10 },
sectionTitle: { color: '#ffffff', fontSize: 13, fontWeight: '900', marginVertical: 12, letterSpacing: 0.5 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { backgroundColor: '#12161F', width: '48.5%', padding: 14, borderRadius: 14, marginBottom: 12, minHeight: 95, justifyContent: 'center' },
  cardSelected: { borderWidth: 1.5, borderColor: '#00A3C4' },
  cardIcon: { fontSize: 14, marginBottom: 6 },
  cardTitle: { color: '#ffffff', fontSize: 14, fontWeight: 'bold' },
  cardDesc: { color: '#666', fontSize: 10, marginTop: 4, lineHeight: 13 },
  powerBtn: { width: 44, height: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  powerBtnText: { color: '#ffffff', fontWeight: 'bold', fontSize: 12 }
});