"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trimText_1 = require("./trimText");
describe('trimText', () => {
    it('should trim a long string to the alloted length', () => {
        const longString = 'a'.repeat(100);
        const newLength = 30;
        const shortString = 'a'.repeat(newLength) + '...';
        expect(trimText_1.trimText(longString, newLength)).toEqual(shortString);
    });
    it('should trim a long string to the default length', () => {
        const longString = 'a'.repeat(100);
        const shortString = 'a'.repeat(70) + '...';
        expect(trimText_1.trimText(longString)).toEqual(shortString);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL29zY2FyL0RvY3VtZW50cy9ib2Jpby9ybi9zcmMvdXRpbHMvdHJpbVRleHQvdHJpbVRleHQudGVzdC50cyIsIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFzQztBQUV0QyxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLENBQUMsaURBQWlELEVBQUUsR0FBRyxFQUFFO1FBQ3pELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBRWxELE1BQU0sQ0FBQyxtQkFBUSxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxpREFBaUQsRUFBRSxHQUFHLEVBQUU7UUFDekQsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUUzQyxNQUFNLENBQUMsbUJBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc2Nhci9Eb2N1bWVudHMvYm9iaW8vcm4vc3JjL3V0aWxzL3RyaW1UZXh0L3RyaW1UZXh0LnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJpbVRleHQgfSBmcm9tICcuL3RyaW1UZXh0JztcblxuZGVzY3JpYmUoJ3RyaW1UZXh0JywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIHRyaW0gYSBsb25nIHN0cmluZyB0byB0aGUgYWxsb3RlZCBsZW5ndGgnLCAoKSA9PiB7XG4gICAgY29uc3QgbG9uZ1N0cmluZyA9ICdhJy5yZXBlYXQoMTAwKTtcbiAgICBjb25zdCBuZXdMZW5ndGggPSAzMDtcbiAgICBjb25zdCBzaG9ydFN0cmluZyA9ICdhJy5yZXBlYXQobmV3TGVuZ3RoKSArICcuLi4nO1xuXG4gICAgZXhwZWN0KHRyaW1UZXh0KGxvbmdTdHJpbmcsIG5ld0xlbmd0aCkpLnRvRXF1YWwoc2hvcnRTdHJpbmcpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCB0cmltIGEgbG9uZyBzdHJpbmcgdG8gdGhlIGRlZmF1bHQgbGVuZ3RoJywgKCkgPT4ge1xuICAgIGNvbnN0IGxvbmdTdHJpbmcgPSAnYScucmVwZWF0KDEwMCk7XG4gICAgY29uc3Qgc2hvcnRTdHJpbmcgPSAnYScucmVwZWF0KDcwKSArICcuLi4nO1xuXG4gICAgZXhwZWN0KHRyaW1UZXh0KGxvbmdTdHJpbmcpKS50b0VxdWFsKHNob3J0U3RyaW5nKTtcbiAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==