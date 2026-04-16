### SAM-79 ログアウト時のバグ修正
```javascript
const handleLogout = async () => {
    try {
      await axios.post(
        `${API_BASE_URL}/auth/company-logout`,
        {},
        {
          withCredentials: true,
        },
      );
      // /loginへリダイレクト
      router.replace("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      logout();
    }
```

## error



