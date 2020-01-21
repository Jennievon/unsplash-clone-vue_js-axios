export const iziToast = {
  data() {
    return {
      // Izitoast
      notificationSystem: {
        options: {
          ballon: {
            balloon: true,
            position: 'bottomCenter'
          },
          info: {
            position: 'bottomLeft'
          },
          success: {
            position: 'topRight',
            close: true,
            closeOnEscape: false,
            timeout: 3000,
            displayMode: 2
          },
          warning: {
            position: 'topLeft'
          },
          error: {
            position: 'topRight',
            displayMode: 2
          },
          question: {
            timeout: 20000,
            close: false,
            overlay: true,
            toastOnce: true,
            id: 'question',
            zindex: 999,
            position: 'center',
            buttons: [
              [
                '<button><b>YES</b></button>',
                function(instance, toast) {
                  instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
                },
                true
              ],
              [
                '<button>NO</button>',
                function(instance, toast) {
                  instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
                }
              ]
            ],
            onClosing: function(instance, toast, closedBy) {
              console.info('Closing | closedBy: ' + closedBy)
            },
            onClosed: function(instance, toast, closedBy) {
              console.info('Closed | closedBy: ' + closedBy)
            }
          }
        }
      }
    }
  },
  methods: {
    showDefaultNotification(title, icon, toastColor, path, customTheme, position, timeout) {
      let that = this
      this.$toast.show(' ', title, {
        theme: customTheme || 'dark',
        // icon: icon,
        timeout: timeout || 60000,
        iconColor: toastColor,
        close: false,
        overlay: false,
        layout: 1,
        // iconUrl: '/img/sc-icon.svg',
        backgroundColor: toastColor,
        // title: 'Hey',
        iconText: 'stars',
        // message: 'Welcome!',
        displayMode: 2,
        position: position || 'bottomRight', // bottomLeft, topRight, topLeft, topCenter, bottomCenter
        // progressBarColor: '#FF2E2E',
        progressBarColor: '#fff',
        buttons: [
          [
            '<button style="color:#000; background-color:#fff; ">Ok</button>',
            function(instance, toast) {
              instance.hide(
                {
                  transitionOut: 'fadeOutUp'
                },
                toast,
                'buttonName'
              )
              location.replace(path)
            },
            true
          ], // true to focus
          [
            '<button style="color:#000; background-color:#fff; outline:none">Cancel</button>',
            function(instance, toast) {
              instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
            }
          ]
        ],
        onOpening: function(instance, toast) {
          // console.info('callback abriu!');
        },
        onClosing: function(instance, toast, closedBy) {
          console.info('closedBy: ' + closedBy) // tells if it was closed by 'drag' or 'button'
        }
      })
    },
    showSuccessLoginNotification() {
      this.$toast.success('Successfully Logged In!', 'OK', this.notificationSystem.options.success)
    },
    showSuccessRegistrationNotification(statusText) {
      this.$toast.success('Registration successful!', statusText, this.notificationSystem.options.success)
    },
    showErrorLoginNotification(errorMessage) {
      this.$toast.error(`${errorMessage}`, 'Error', this.notificationSystem.options.error)
    },
    showErrorRegistrationNotification(statusText) {
      this.$toast.error('Registration failed', statusText, this.notificationSystem.options.error)
    },
    showSuccessNotification(value) {
      this.$toast.success(value || 'Operation successful!', 'OK', this.notificationSystem.options.success)
    },
    showErrorNotification() {
      this.$toast.error('Operation failed', 'Error', this.notificationSystem.options.error)
    }
  }
}
