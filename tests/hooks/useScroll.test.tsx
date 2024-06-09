import {useScrolled} from "@/app/hooks/UseScrolled";
import {act, renderHook} from "@testing-library/react";
import {describe, it} from "@jest/globals";
import expect from "expect";

describe('useScroll', () => {
    it('should repond to scroll events', () => {
    const { result } = renderHook(() => useScrolled());
    expect(result.current).toBe(false);
    act(() => {
        global.window.scrollY = 21;
        global.window.dispatchEvent(new Event('scroll'));
    })
    expect(result.current).toBe(true);

    act(() => {
        global.window.scrollY = 0;
        global.window.dispatchEvent(new Event('scroll'));

    })
    expect(result.current).toBe(false);
    })
});
